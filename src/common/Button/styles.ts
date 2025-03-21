import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string; disabled?: boolean }>`
  background: ${(p) => (p.disabled ? "#ccc" : p.color || "#2e186a")};
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: ${(p) => (p.disabled ? "1px solid #edf3f5" : "1px solid rgb(255, 130, 92)")};
    background-color: ${(p) => (p.disabled ? "#ccc" : "rgb(255, 130, 92)")};
  }
`;
