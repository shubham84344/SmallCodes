1. React component's lifecycle
There are 3 main phases in a React component's lifecycle:
Mounting – When the component is being created and inserted into the DOM.
Updating – When the component is re-rendered due to changes in props or state.
Unmounting – When the component is removed from the DOM.

Class Component	Function Component
componentDidMount()	useEffect(() => {...}, [])
componentDidUpdate()	useEffect(() => {...}, [deps])
componentWillUnmount()	useEffect(() => { return () => {...} }, [])


2. Controlled vs Uncontrolled Components in React

✅ Controlled Components

React controls the input using state.
Input value is set via value={stateVariable}.
Changes are handled using onChange.
Example: Forms, inputs, textareas, selects.
Easier to validate, reset, or manipulate data.
More code but predictable behavior.
Common in most React apps.

🔹 Example:
<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>

🚫 Uncontrolled Components

Input value is managed by the DOM itself.
Access input using ref instead of state.
No onChange or state tracking.
Simpler and less code.
Harder to validate or control.
Useful for basic or quick input needs (e.g., file uploads).

🔹 Example:
<input type="text" ref={inputRef} />

📊 Key Differences (Simple Table)
Feature	            Controlled Component	      Uncontrolled Component
Data stored in	    React state (useState)	      DOM element (useRef)
How to access value	value + onChange	          ref.current.value
Validation	        Easy to handle	              Manual, less convenient
Use case	        Complex forms, validations	  Simple forms, file uploads
React control	    Full control over input data  Minimal control