import Swal from "sweetalert2";
import Navbar from "./Navbar";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppliers = form.suppliers.value;
    const taste = form.taste.value;
    const categories = form.categories.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      suppliers,
      taste,
      details,
      categories,
      photo,
    };
    console.log(newCoffee);

    fetch("https://coffee-store-server-two-theta.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-5xl font-extrabold my-10 text-center">Add Coffee</h1>
      <form onSubmit={handleAddCoffee} className="flex justify-center">
        <div className="bg-[#F4F3F0] w-3/4 rounded-xl p-10">
          {/* Form Row of Name and Available Quantity  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  Coffee Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  Available Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row of Supplier and Taste  */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Supplier"
                  name="suppliers"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Taste"
                  name="taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row of Categories and Details  */}
          <div className="md:flex bg-[#F4F3F0] mb-8  ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">Categories</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Categories"
                  name="categories"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Details"
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Photo Url */}
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text text-xl font-bold">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Submit Button  */}
          <div>
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block bg-[#D2B48C] font-bold "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
