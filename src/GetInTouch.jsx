export default function GetInTouch() {
  const [formData, setFormData] = useState({
    Email: "",
    Mobile: "",
    Message: "",
  });
  const [isSubmitted, setSubmitted0] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const handleSubmit = (e) => {
      /* ... */
    };
  };

  return <div>GetinTouch</div>;
}
