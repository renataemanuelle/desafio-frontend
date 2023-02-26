import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1em;
  font-style: italic;
  margin-bottom: 0.7em;
  margin-left: 3em;
  margin-right: 3em;
  border-radius: 5px;
  border-width: 1px;
  border-style: double;
  border-color: #007be5;
  padding: 0.5em;
  width: 30em;
  height: 1.5em;
  ::placeholder {
    color: #444444;
    font-size: 0.75em;
  }
`;

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
};

export const Input = ({
  id,
  name,
  placeholder,
  type,
  disabled,
  required,
}: InputProps) => {
  return (
    <StyledInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      required={required}
    ></StyledInput>
  );
};
