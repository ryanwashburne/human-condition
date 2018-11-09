import React from 'react'

export default ({ children }) => (
  <div className="d-block d-md-flex justify-content-center">
    {children.length && children.map((child, i) => (
      <div key={i}>
        {child}
      </div>
    ))}
    {!children.length && (
      <div>
        {children}
      </div>
    )}
  </div>
)

// export default ({ children }) => (
//   <div className="row no-gutters w-100">
//     {children.length && children.map((child, i) => (
//       <div key={i} className={`col-12 col-md-${12 / children.length} px-0`}>
//         {child}
//       </div>
//     ))}
//     {!children.length && (
//       <div className="col-12 px-0">
//         {children}
//       </div>
//     )}
//   </div>
// )
