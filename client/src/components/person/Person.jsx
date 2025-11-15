import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

function Person() {
  const BASE_URL = import.meta.env.VITE_BASE_URL + "/people";

  const [people, setPeople] = useState([]);
  const [loadig, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    try {
      const loadPeople = async () => {
        var peopleData = (await axios.get(BASE_URL)).data;
        setPeople(peopleData);
      };
      loadPeople();
    } catch (error) {
      console.log(error);
      toast.error("An Error has occurred!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    methods.reset(editData);
  }, [editData]);

  const defaultFormValues = {
    id: 0,
    firstName: "",
    lastName: "",
  };

  const methods = useForm({ defaultValues: defaultFormValues });

  const handleFormReset = () => {
    methods.reset(defaultFormValues);
  };

  const handleFormSubmit = async (person) => {
    setLoading(true);
    try {
      if (person.id <= 0) {
        const createdPerson = (await axios.post(BASE_URL, person)).data;
        setPeople((previousPeople) => [...previousPeople, createdPerson]);
      } else {
        await axios.put(`${BASE_URL}/${person.id}`, person);
        setPeople((previousPeople) =>
          previousPeople.map((p) => (p.id === person.id ? person : p))
        );
      }
      methods.reset(defaultFormValues);
      toast.success("Save successfully!");
    } catch (error) {
      console.log(error);
      toast.error("An Error has occurred!");
    } finally {
      setLoading(false);
    }
  };

  const handlePersonEdit = (person) => {
    setEditData(person);
  };
  const handlePersonDelete = (person) => {
    if (
      !confirm(
        `Are you sure you want to delete ${person.firstName} ${person.lastName}?`
      )
    )
      return;
    setLoading(true);
    try {
      setPeople((previousPeople) =>
        previousPeople.filter((p) => p.id !== person.id)
      );
      toast.success("Delete successfully!");
    } catch (error) {
      toast.error("An error on Deleting!");
    } finally {
      setLoading(false);
    }
  };
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Person Management
//           </h1>
//           {loadig && <p>Loading...</p>}
//         </div>

//         <PersonForm
//           methods={methods}
//           onFormReset={handleFormReset}
//           onFormSubmit={handleFormSubmit}
//         />
//         <PersonList
//           peopleList={people}
//           onPersonEdit={handlePersonEdit}
//           onPersonDelete={handlePersonDelete}
//         />
//       </div>
//     </div>
//   );
// }

// export default Person;


// function Person() {
//   const BASE_URL = import.meta.env.VITE_BASE_URL + "/people";

//   const [people, setPeople] = useState([]);
//   const [loadig, setLoading] = useState(true);
//   const [editData, setEditData] = useState(null);

//   const methods = useForm({
//     defaultValues: { id: 0, firstName: "", lastName: "" },
//   });

//   // Load People
//   useEffect(() => {
//     const loadPeople = async () => {
//       try {
//         const data = (await axios.get(BASE_URL)).data;
//         setPeople(data);
//       } catch {
//         toast.error("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadPeople();
//   }, []);

//   useEffect(() => {
//     methods.reset(editData);
//   }, [editData]);

//   // Submit Form
//   const handleFormSubmit = async (person) => {
//     setLoading(true);

//     try {
//       if (person.id <= 0) {
//         const created = (await axios.post(BASE_URL, person)).data;
//         setPeople([...people, created]);
//       } else {
//         await axios.put(`${BASE_URL}/${person.id}`, person);
//         setPeople(people.map((p) => (p.id === person.id ? person : p)));
//       }

//       methods.reset();
//       toast.success("Saved successfully!");
//     } catch {
//       toast.error("Error saving person");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete Person
//   const handlePersonDelete = (person) => {
//     if (!confirm(`Delete ${person.firstName} ${person.lastName}?`)) return;
//     setPeople(people.filter((p) => p.id !== person.id));
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Manage People
          </h1>
          {loadig && <p className="text-gray-400 mt-2">Loading...</p>}
        </div>

        <PersonForm
          methods={methods}
          onFormReset={() => methods.reset()}
          onFormSubmit={handleFormSubmit}
        />

        <PersonList
          peopleList={people}
          onPersonEdit={(p) => setEditData(p)}
          onPersonDelete={handlePersonDelete}
        />
      </div>
    </div>
  );
}

export default Person;
