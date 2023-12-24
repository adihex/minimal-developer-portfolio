function Footer() {
  return (
    <div className="py-5 text-center">
      {/*Social icons*/}
      <p className="mt-2 text-sm opacity-50">
        {" "}
        &copy; {new Date().getFullYear()} Aditya Balakrishnan. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
