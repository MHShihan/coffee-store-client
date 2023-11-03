import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, suppliers, taste, details, categories, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppliers = form.suppliers.value;
    const taste = form.taste.value;
    const categories = form.categories.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newUpdatedCoffee = {
      name,
      quantity,
      suppliers,
      taste,
      details,
      categories,
      photo,
    };
    console.log(newUpdatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
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
      <h1 className="text-5xl font-extrabold my-10 text-center">
        Update Coffee : {name}
      </h1>
      <form onSubmit={handleUpdateCoffee} className="flex justify-center">
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
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={suppliers}
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
                  defaultValue={taste}
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
                  defaultValue={categories}
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
                  defaultValue={details}
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
                defaultValue={photo}
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
              value="Update Coffee"
              className="btn btn-block bg-[#D2B48C] font-bold "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
