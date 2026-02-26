export const openWhatsApp = (type, itemName) => {
  const phoneNumber = "1234567890"; // Replace with salon's actual number
  let message = "";

  if (type === "service") {
    message = `Hi, I want to book the ${itemName} service.`;
  } else if (type === "course") {
    message = `Hi, I want to register for the ${itemName} course.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
};