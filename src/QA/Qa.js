import React from 'react';
import './Qa.css';

const Qa = () => {
    return (
        <div className='test-container'>
            <div>
                <h2>How react works?</h2>
                <p>React is a JavaScript library tha is mainly used to creates user interfaces (UI). React is working in a predictable and efficient way using declarative code. It is used for build single page applications, mobile apps and complex apps with using of other libraries. It lets you compose complex UIs from small and isolated pieces. React basically maintains a tree and the tree is able to do efficient diff computations on the nodes. React use virtual DOM to effectively re-construct real DOM in JavaScript and push only those changes to the DOM which have actually occurred.

                    React working Steps:
                    <li>JSX is syntactic sugar => React Renderer => React Reconciliation => React Keys</li>
                </p>
            </div>
            <div>
                <h2>What are the Difference between Props and State ?</h2>
                <p><b>PROPS</b></p>
                <p>
                    <li>The Data is passed from one component to another.</li>
                    <li>It is Immutable (cannot be modified).</li>
                    <li>Props can be used with state and functional components.</li>
                    <li>Props are read-only.</li>
                </p>
                <p><b>STATE</b></p>
                <p>
                    <li>The Data is passed within the component only.</li>
                    <li>It is Mutable ( can be modified).</li>
                    <li>State can be used only with the state components/class component (Before 16.0).</li>
                    <li>State is both read and write.</li>

                </p>
            </div>
            <div>
                <h2>How useState Works ?</h2>
                <p>useState is a React Hook. It's allows to have state variables in functional components. Calling React.useState inside a function component generates a single piece of state associated with that component. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</p>
            </div>
        </div>
    );
};

export default Qa;