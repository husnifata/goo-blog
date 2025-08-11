import React, { useEffect } from "react";
import * as Sentry from "@sentry/react";

export default function ErrorTest() {
  useEffect(() => {
    Sentry.captureException(new Error("Test error manual dari ErrorTest"));
  }, []);

  return <div>Test error sudah dikirim ke Sentry.</div>;
}
