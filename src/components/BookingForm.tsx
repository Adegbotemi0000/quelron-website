"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, CalendarCheck } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";

const sessionTypes = [
  "Discovery Call",
  "Project Consultation",
  "Partnership Discussion",
  "General Inquiry",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subsidiary: z.string().min(1, "Please select a subsidiary"),
  sessionType: z.string().min(1, "Please select a session type"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    setStatus("submitting");
    try {
      await new Promise((res) => setTimeout(res, 1100));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm text-navy placeholder:text-grey/70 transition-all duration-200 outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-3xl bg-green-50 px-8 py-16 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 size={30} />
        </div>
        <h3 className="font-display mt-6 text-2xl font-bold text-navy">Session Requested!</h3>
        <p className="mt-2 max-w-sm text-sm text-grey">
          We&rsquo;ve received your booking request. A confirmation email with next steps
          is on its way.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-name" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Full Name
          </label>
          <input id="b-name" className={fieldClass} placeholder="Jane Doe" {...register("name")} />
          {errors.name && <FieldError msg={errors.name.message} />}
        </div>
        <div>
          <label htmlFor="b-email" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Email Address
          </label>
          <input id="b-email" type="email" className={fieldClass} placeholder="jane@company.com" {...register("email")} />
          {errors.email && <FieldError msg={errors.email.message} />}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-subsidiary" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Subsidiary
          </label>
          <select id="b-subsidiary" className={fieldClass} defaultValue="" {...register("subsidiary")}>
            <option value="" disabled>
              Select a subsidiary
            </option>
            {subsidiaries.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.subsidiary && <FieldError msg={errors.subsidiary.message} />}
        </div>
        <div>
          <label htmlFor="b-type" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Session Type
          </label>
          <select id="b-type" className={fieldClass} defaultValue="" {...register("sessionType")}>
            <option value="" disabled>
              Select session type
            </option>
            {sessionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.sessionType && <FieldError msg={errors.sessionType.message} />}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-date" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Preferred Date
          </label>
          <input id="b-date" type="date" className={fieldClass} {...register("date")} />
          {errors.date && <FieldError msg={errors.date.message} />}
        </div>
        <div>
          <label htmlFor="b-time" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Preferred Time
          </label>
          <input id="b-time" type="time" className={fieldClass} {...register("time")} />
          {errors.time && <FieldError msg={errors.time.message} />}
        </div>
      </div>

      <div>
        <label htmlFor="b-notes" className="mb-1.5 block text-xs font-semibold text-navy/70">
          Notes <span className="font-normal text-grey">(optional)</span>
        </label>
        <textarea
          id="b-notes"
          rows={4}
          className={fieldClass}
          placeholder="Anything we should know ahead of the session?"
          {...register("notes")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-xl disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Booking...
          </>
        ) : (
          <>
            <CalendarCheck size={16} /> Request Session
          </>
        )}
      </button>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            <AlertCircle size={16} /> Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <p className="mt-1 flex items-center gap-1 text-xs text-red-600" role="alert">
      <AlertCircle size={12} /> {msg}
    </p>
  );
}
