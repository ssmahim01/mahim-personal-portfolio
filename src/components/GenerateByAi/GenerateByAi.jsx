import Swal from "sweetalert2";

const GenerateByAi = () => {
  const options = [
    "Painting",
    "Animated-image",
    "Wallpaper",
    "Poster",
    "Digital-art",
    "Realistic-image",
  ];

  const validationForm = (prompt, category) => {
    if (!category) {
        Swal.fire(
          "Select Category",
          "Select a Category from the dropdown",
          "error"
        );
        return;
      }
      if (!prompt) {
        Swal.fire("Write a Prompt", "Write a prompt in the input", "error");
        return;
      }
      if (!prompt) {
        Swal.fire("Write a Prompt", "Write a prompt in the input", "error");
        return;
      }
      if (prompt.trim().length < 20) {
        Swal.fire(
          "Invalid Prompt",
          "make your prompt bigger (minimum 20 character)",
          "error"
        );
        return;
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const prompt = form.prompt.value;
    const category = form.category.value;
    // validation starts
    if(validationForm(prompt, category)) return;
    //validation End

    console.log({ prompt, category });
    const finalPrompt = `imagine a ${category} : ${prompt}`;
    console.log(finalPrompt);
    return;
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex justify-center py-5">
        <img
          src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
          alt="Image of a Fish"
          className="animate-bounce"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="join w-full md:flex-row flex-col justify-center flex-wrap"
      >
        <div className="md:flex-1">
          <div>
            <input
              name="prompt"
              className="input w-full input-bordered md:join-item outline-none focus:outline-none focus:border-primary"
              placeholder="Write , Whats on your Mind🧠🧠"
            />
          </div>
        </div>
        <div className="md:mt-0 mt-2 md:mx-0 mx-auto">
          <select
            name="category"
            className="select select-bordered join-item max-w-max outline-none focus:outline-none focus:border-primary font-semibold"
          >
            <option value="">Select a Category</option>
            {options.map((opt) => (
              <option key={opt} value={opt} className="font-semibold">
                {opt}
              </option>
            ))}
          </select>
          <div className="indicator">
            <button className="btn join-item bg-emerald-500 border-none font-bold text-white rounded-md">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenerateByAi;
