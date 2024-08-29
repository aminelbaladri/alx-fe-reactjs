import TodoList from "../components/TodoList";
import { render, fireEvent, screen } from "@testing-library/react";


test("test rendering", () => {
    render(<TodoList />);
    expect(screen.getByText("Sample Todo")).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByText("Remove")).toBeInTheDocument();
});
