import ErrorContent from "@/features/errors/components/error-content";

export default function NotFound() {
  return (
    <ErrorContent
      eyebrow="404 / NOT FOUND"
      title="This page doesn't exist."
      description="The page you were looking for has moved or is no longer available."
    />
  );
}
