"use client";

import { useRef, useState, type SubmitEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { submitContact, type ContactPayload } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FormCopy = Dictionary["contact"]["form"];
type FieldName = keyof ContactPayload;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FIELD_ORDER: FieldName[] = ["name", "email", "company", "message"];
const EMPTY: ContactPayload = { name: "", email: "", company: "", message: "" };

function validate(values: ContactPayload, copy: FormCopy): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = copy.errors.nameRequired;
  if (!values.email.trim()) errors.email = copy.errors.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = copy.errors.emailInvalid;
  if (!values.message.trim()) errors.message = copy.errors.messageRequired;
  else if (values.message.trim().length < 10) errors.message = copy.errors.messageShort;
  return errors;
}

export function ContactForm({ copy }: { copy: FormCopy }) {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const errors = validate(values, copy);
  const visibleError = (field: FieldName) =>
    submitted || touched[field] ? errors[field] : undefined;
  const touch = (field: FieldName) => () => setTouched((t) => ({ ...t, [field]: true }));

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== "submitting") setStatus("idle");
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const firstInvalid = FIELD_ORDER.find((field) => errors[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitContact({
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        message: values.message.trim(),
      });
      if (result === "not-configured") {
        setStatus("not-configured");
        return;
      }
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label={copy.name}
          autoComplete="name"
          value={values.name}
          error={visibleError("name")}
          required
          onChange={(value) => update("name", value)}
          onBlur={touch("name")}
        />
        <Field
          name="email"
          type="email"
          label={copy.email}
          autoComplete="email"
          value={values.email}
          error={visibleError("email")}
          required
          onChange={(value) => update("email", value)}
          onBlur={touch("email")}
        />
      </div>
      <Field
        name="company"
        label={copy.company}
        hint={copy.optional}
        autoComplete="organization"
        value={values.company}
        onChange={(value) => update("company", value)}
      />
      <Field
        name="message"
        label={copy.message}
        multiline
        value={values.message}
        error={visibleError("message")}
        required
        onChange={(value) => update("message", value)}
        onBlur={touch("message")}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? copy.submitting : copy.submit}
        </Button>
        <p role="status" aria-live="polite" className="text-sm leading-relaxed">
          {status === "success" && <span className="text-success">{copy.success}</span>}
          {status === "error" && <span className="text-danger">{copy.error}</span>}
          {status === "not-configured" && <span className="text-ink-muted">{copy.notConfigured}</span>}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  name: FieldName;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
};

function Field({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  hint,
  type = "text",
  autoComplete,
  required,
  multiline,
}: FieldProps) {
  const id = `contacto-${name}`;
  const errorId = `${id}-error`;
  const inputClasses = cn(
    "w-full rounded-control border bg-surface px-3.5 py-2.5 text-base text-ink transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary",
    error ? "border-danger" : "border-line-strong hover:border-ink",
  );
  const shared = {
    id,
    name,
    value,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onBlur,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && (
          <span aria-hidden="true" className="text-danger">
            {" "}
            *
          </span>
        )}
        {hint && <span className="font-normal text-ink-muted"> {hint}</span>}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          rows={5}
          className={cn(inputClasses, "resize-y")}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          {...shared}
          type={type}
          dir={type === "email" ? "ltr" : undefined}
          className={inputClasses}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
