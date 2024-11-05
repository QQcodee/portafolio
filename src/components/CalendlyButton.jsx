// src/components/CalendlyButton.jsx
import React, { useEffect } from "react";
import Button from "./Button";

const CalendlyButton = () => {
  useEffect(() => {
    // Check if the Calendly script is already loaded to avoid duplicates
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    // Check if Calendly is available on window object, then initialize the popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/enrique-cb/asesoria-gratuita",
      });
    }
  };

  return (
    <div onClick={openCalendly}>
      <Button
        name="Agendar asesoria gratuita"
        isBeam
        containerClass="w-full mt-10"
      />
    </div>
  );
};

export default CalendlyButton;
