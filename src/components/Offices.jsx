import clsx from "clsx"

function Office({ name, children, invert = false }) {
  return (
    <address className={clsx(
        "text-sm not-italic",
        invert ? "text-celeste-light" : "text-celeste"
      )}
    >
      <strong className={invert ? "text-celeste": "text-casal"}>
         {name}
      </strong>
      <br/>
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="KENYA" invert={invert}>
          Nairobi Garage
        <br/>
        Nairobi
        </Office>
      </li>
      <li>
        <Office name="U.S.A" invert={invert}>
          San Francisco
        <br/>
        California
        </Office>
      </li>
    </ul>
  )
}

export default Offices;