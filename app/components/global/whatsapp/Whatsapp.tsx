"use client";
import React from "react";
import WhatsSVG from "../../../../public/Images/global/whatsapp-button.svg";
import { Whats, WhatsIcon } from "./whatsapp.styles";

export default function Whatsapp() {
  return (
    <Whats>
      <a href="https://forms.monday.com/forms/908b96151628d9f2971ee60cb1bdb7a0?r=use1" target="_blank">
        <WhatsIcon
          src={WhatsSVG}
          alt="Link para o WhatsApp Mad Digital"
        />
      </a>
    </Whats>
  );
}

