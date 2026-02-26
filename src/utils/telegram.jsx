export const openTelegram = (type, itemName) => {
  // Replace this with the actual Telegram username of BeautyVibes or your Bot
  const telegramHandle = "Hermela02"; 
  let message = "";

  if (type === "service") {
    message = `Hi BeautyVibes! ✨ I would like to book the *${itemName}* service.`;
  } else if (type === "course") {
    message = `Hi BeautyVibes! 🎓 I am interested in registering for the *${itemName}* course.`;
  }

  // Encode the message so it formats correctly in the URL
  const encodedMessage = encodeURIComponent(message);
  
  // Construct the Telegram deep link
  const telegramUrl = `https://t.me/${telegramHandle}?text=${encodedMessage}`;
  
  // Open Telegram in a new tab/app
  window.open(telegramUrl, "_blank");
};