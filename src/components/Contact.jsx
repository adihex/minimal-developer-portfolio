import Title from "./Title";
function Contact() {
  return (
    <div className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form
          action="https://getform.io/f/4411a5d1-9a07-46cb-b99d-9170822f97e2"
          method="POST"
          className="flex w-full flex-col md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />
          <button
            type="button"
            className="inline-block w-max rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md hover:stroke-white"
          >
            Work with me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
