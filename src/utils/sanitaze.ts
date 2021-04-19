import sanitizeHtml from "sanitize-html";

type DangerousHTML = {
  __html: string;
};

export const getSafetyHtml = (html: string): DangerousHTML => {
  return {
    __html: sanitizeHtml(html, {
      allowedAttributes: {
        span: ["class"],
      },
    }),
  };
};
