import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, enquiriesTable } from "@workspace/db";
import { SubmitEnquiryBody, ListEnquiriesResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/enquiries", async (req, res): Promise<void> => {
  const parsed = SubmitEnquiryBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid enquiry body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [enquiry] = await db
    .insert(enquiriesTable)
    .values(parsed.data)
    .returning();

  req.log.info({ id: enquiry.id }, "Enquiry submitted");
  res.status(201).json(enquiry);
});

router.get("/enquiries", async (req, res): Promise<void> => {
  const enquiries = await db
    .select()
    .from(enquiriesTable)
    .orderBy(desc(enquiriesTable.createdAt));

  res.json(ListEnquiriesResponse.parse(enquiries));
});

export default router;
