export interface BookingInquiry {
  type: 'service' | 'course';
  itemName: string;
  clientName: string;
  phone: string;
  date?: string;
  timeSlot?: string;
  serviceMode?: 'at-home' | 'studio';
  cohortSchedule?: string;
  neighborhood?: string;
  notes?: string;
}

export const TELEGRAM_HANDLE = "Hermela02";
export const PHONE_NUMBER = "+251714358869"; // For WhatsApp / Phone calls

/**
 * Builds a structured, elegant message for booking and inquiries.
 */
export const formatBookingMessage = (inquiry: BookingInquiry): string => {
  const isService = inquiry.type === 'service';
  const header = isService
    ? "✨ *NEW BEAUTYVIBES APPOINTMENT INQUIRY* ✨"
    : "🎓 *NEW BEAUTYVIBES ACADEMY ENROLLMENT* 🎓";

  const lines: string[] = [
    header,
    "━━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Client Name:* ${inquiry.clientName || "Not provided"}`,
    `📞 *Phone Number:* ${inquiry.phone || "Not provided"}`,
    `💎 *${isService ? "Service Requested" : "Course"}:* ${inquiry.itemName}`,
  ];

  if (isService) {
    if (inquiry.serviceMode) {
      lines.push(
        `📍 *Location Preference:* ${
          inquiry.serviceMode === 'at-home'
            ? `At-Home / Mobile (${inquiry.neighborhood || "Addis Ababa"})`
            : "BeautyVibes Studio"
        }`
      );
    }
    if (inquiry.date) {
      lines.push(`📅 *Preferred Date:* ${inquiry.date}`);
    }
    if (inquiry.timeSlot) {
      lines.push(`⏰ *Preferred Time Slot:* ${inquiry.timeSlot}`);
    }
  } else {
    if (inquiry.cohortSchedule) {
      lines.push(`🗓️ *Preferred Schedule:* ${inquiry.cohortSchedule}`);
    }
    if (inquiry.date) {
      lines.push(`🎯 *Target Intake:* ${inquiry.date}`);
    }
  }

  if (inquiry.notes && inquiry.notes.trim()) {
    lines.push(`📝 *Special Requests / Notes:* ${inquiry.notes.trim()}`);
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push(
    isService
      ? "Looking forward to confirming my appointment slot. Thank you!"
      : "I look forward to details on registration & securing my seat. Thank you!"
  );

  return lines.join("\n");
};

/**
 * Dispatches the structured inquiry directly to Telegram.
 */
export const sendStructuredTelegram = (inquiry: BookingInquiry): void => {
  const message = formatBookingMessage(inquiry);
  const encoded = encodeURIComponent(message);
  const url = `https://t.me/${TELEGRAM_HANDLE}?text=${encoded}`;

  if (typeof window !== "undefined") {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
};

/**
 * Dispatches the structured inquiry to WhatsApp.
 */
export const sendStructuredWhatsApp = (inquiry: BookingInquiry): void => {
  const message = formatBookingMessage(inquiry);
  const encoded = encodeURIComponent(message);
  const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanPhone}?text=${encoded}`;

  if (typeof window !== "undefined") {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
};

/**
 * Simple quick Telegram link for backward compatibility.
 */
export const openTelegram = (type: 'service' | 'course', itemName: string): void => {
  let message = "";
  if (type === "service") {
    message = `Hi BeautyVibes! ✨ I would like to book the *${itemName}* service.`;
  } else if (type === "course") {
    message = `Hi BeautyVibes! 🎓 I am interested in registering for the *${itemName}* course.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/${TELEGRAM_HANDLE}?text=${encodedMessage}`;

  if (typeof window !== "undefined") {
    const newWindow = window.open(telegramUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
};
