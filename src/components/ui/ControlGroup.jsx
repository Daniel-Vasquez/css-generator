export const ControlGroup = ({ title, children }) => (
  <fieldset className="flex flex-col gap-3 bg-blue-light rounded-md py-4 px-4">
    <legend className="sr-only">{title}</legend>
    <p className="font-semibold text-golden" aria-hidden="true">{title}</p>
    {children}
  </fieldset>
)
