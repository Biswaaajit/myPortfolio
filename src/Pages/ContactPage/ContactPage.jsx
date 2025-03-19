import { useState } from "react";
import Input from "./Input";
import InputContainer from "./InputContainer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // form validation

  async function handleSubmit(e) {
    e.preventDefault();
    const regex = /^\d{10}$/; // Allows only 10-digit numbers

    if (!firstName) return toast.error("First Name Missing !!");
    if (!lastName) return toast.error("Last Name Missing !!");
    if (!email) return toast.error("Email Missing !!");
    if (!number) return toast.error("Number Missing !!");
    if (!message) return toast.error("Add a message");
    if (!regex.test(number)) {
      toast.error("Enter Valid Number");
      setNumber("");
      return;
    }

    setSending(true);

    const templateParams = {
      firstName,
      lastName,
      email,
      number,
      message,
    };

    try {
      await emailjs.send(
        "service_isj0ky6",
        "template_4gkjvll",
        templateParams,
        "mnCPIo6AQP07ZqEuc",
      );

      toast.success("Message Sent Successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setSending(false); // Re-enable button after email is sent
    }
  }

  return (
    <div className="min-h-screen w-full bg-black pb-8 pt-28">
      <div className="mx-auto w-[90%] sm:w-[85%] md:w-[75%] xl:w-[65%]">
        <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-800 p-[3px]">
          <form
            onSubmit={handleSubmit}
            className="sm:py-22 box-content flex flex-col gap-8 rounded-xl bg-zinc-950 px-5 py-12 sm:px-10 md:gap-10 xl:px-14"
          >
            <InputContainer>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                setFunc={setFirstName}
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                setFunc={setLastName}
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                setFunc={setEmail}
              />
              <Input
                type="text"
                placeholder="Mobile Number"
                value={number}
                setFunc={setNumber}
              />
            </InputContainer>

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[17vh] w-full rounded-lg border-2 border-zinc-800 bg-zinc-950 px-2 py-1.5 text-base transition-all hover:border-indigo-600 focus:border-0 focus:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:h-[22vw] md:h-[25vh] lg:grow lg:px-3 lg:py-2"
            ></textarea>
            <div className="mt-5 w-fit self-center rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-800 p-[2px] md:mt-8">
              <button
                disabled={sending}
                type="submit"
                className="w-full rounded-xl bg-zinc-950 from-indigo-600 to-fuchsia-800 px-8 py-1.5 text-lg hover:bg-gradient-to-r"
              >
                {sending ? "Sending..." : "Message Me"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
