
test("test", () => {
    render(<TodoList />);

    fireEvent.click(screen.getByText("Remove"));

    expect(screen.queryByText("Sample Todo")).toBeNull();
});