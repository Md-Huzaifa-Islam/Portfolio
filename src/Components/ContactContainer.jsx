import ContactForm from "@/client/ContactForm";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";
import ContactInfo from "./ContactInfo";

export default function ContactContainer() {
  return (
    <div className="px-5 pt-28 md:container md:mx-auto">
      <SectionHeader
        heading={"Contact Me"}
        subHeading={"Feel free to send me a message!"}
      />

      <div className="flex flex-col items-center justify-center gap-28 lg:flex-row">
        {/* Left Box: Message Form */}
        <ContactForm />

        {/* Right Box: Contact Details */}
        <ContactInfo />
      </div>
    </div>
  );
}
