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
      {/* 
      <div className="flex flex-col items-center justify-center gap-28 lg:flex-row">
       
        
      </div> */}
      <div className="flex w-full flex-col items-start justify-center gap-28 lg:flex-row">
        <ContactForm />
        <div className="divider lg:divider-horizontal">OR</div>
        <ContactInfo />
      </div>
    </div>
  );
}
