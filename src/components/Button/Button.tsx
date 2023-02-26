import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props: { type: any }) =>
    props.type === "primary" ? "#007BE5" : "transparent"};
  color: ${(props: { type: any }) =>
    props.type === "primary" ? "white" : "#007BE5"};
  font-size: 0.9em;
  height: 3em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  font-weight: bold;
  border: ${(props: { type: any }) =>
    props.type === "secondary" ? "1px solid #007BE5" : "none"}; ;
`;

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: "primary" | "secondary" | string;
};

export const Button = ({ label, onClick, type }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
