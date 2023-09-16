const Footer = () => {
  return (
    <div className="text-center text-sm my-4">
      &copy; {new Date().getFullYear()} Notes-App. Submission{" "}
      <a
        href="https://www.dicoding.com/"
        target="_blank"
        className="text-blue-600 underline"
      >
        Dicoding Indonesia
      </a>
    </div>
  );
};

export default Footer;
