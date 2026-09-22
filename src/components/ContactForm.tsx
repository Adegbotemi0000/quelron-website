"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subsidiary: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({
  accentColor = "#1E3A8A",
  defaultSubsidiary,
  showSubsidiarySelect = true,
  compact = false,
}: {
  accentColor?: string;
  defaultSubsidiary?: string;
  showSubsidiarySelect?: boolean;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subsidiary: defaultSubsidiary ?? "" },
  });

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
    "w-full rounded-xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm text-navy placeholder:text-grey/70 transition-all duration-200 outline-none focus:border-transparent focus:bg-white focus:ring-2";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={compact ? "space-y-4" : "space-y-5"}
      style={{ ["--tw-ring-color" as string]: accentColor }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Full Name
          </label>
          <input id="name" className={fieldClass} placeholder="Jane Doe" {...register("name")} />
          {errors.name && <FieldError msg={errors.name.message} />}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Email Address
          </label>
          <input id="email" type="email" className={fieldClass} placeholder="jane@company.com" {...register("email")} />
          {errors.email && <FieldError msg={errors.email.message} />}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-navy/70">
            Phone <span className="font-normal text-grey">(optional)</span>
          </label>
          <input id="phone" className={fieldClass} placeholder="+234 700 000 0000" {...register("phone")} />
        </div>
        {showSubsidiarySelect && (
          <div>
            <label htmlFor="subsidiary" className="mb-1.5 block text-xs font-semibold text-navy/70">
              Subsidiary of Interest
            </label>
            <select id="subsidiary" className={fieldClass} {...register("subsidiary")} defaultValue={defaultSubsidiary ?? ""}>
              <option value="">General Inquiry</option>
              {subsidiaries.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-navy/70">
          Message
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 5}
          className={fieldClass}
          placeholder="Tell us a bit about what you're looking for..."
          {...register("message")}
        />
        {errors.message && <FieldError msg={errors.message.message} />}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 sm:w-auto sm:px-8"
        style={{ backgroundColor: accentColor }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700"
            role="status"
          >
            <CheckCircle2 size={16} /> Thanks — your message has been received. We&apos;ll be in touch shortly.
          </motion.div>
        )}
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
