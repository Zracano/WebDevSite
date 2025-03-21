import { useState } from "react";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const validateForm = () => {
    const errors = validate(formState.values);
    setFormState((prev) => ({ ...prev, errors }));
    return errors;
  };

  const resetForm = () => {
    setFormState({
      values: { ...initialValues },
      errors: { ...initialValues },
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      errors: { ...prev.errors, [name]: "" },
    }));
  };

  return {
    values: formState.values,
    errors: formState.errors,
    handleChange,
    validateForm,
    resetForm,
  };
};
