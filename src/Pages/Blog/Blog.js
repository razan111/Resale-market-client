import React from 'react';

const Blog = () => {
    return (
        <div className='p-3 md:px-8 lg:px-24'>
            <h2 className='text-4xl text-center my-4'>Frequently <span className='text-blue-700'>Asked</span> <span className='text-fuchsia-800'>Question</span> Section</h2>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                <div className="collapse-title text-2xl font-medium">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-lg'>There are four main types of state you need to properly manage in your React apps:</p>
                    <p className='text-lg font-semibold'>1. Local state</p>
                    <p className='text-lg font-semibold'>2. Global state</p>
                    <p className='text-lg font-semibold'>4. URL state</p>
                    <p className='text-lg font-semibold'>3. Server state</p>

                    <p className='my-2'><span className='text-lg font-semibold'>Local (UI) state</span> – Local state is data we manage in one or another component. <br />

                        Local state is most often managed in React using the useState hook. <br />

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    </p>


                    <p><span className='text-lg font-semibold'>Global (UI) state</span> – Global state is data we manage across multiple components. <br />

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />

                        Sometimes state we think should be local might become global.
                    </p>

                    <p><span className='text-lg font-semibold'>Server state</span> – Data that comes from an external server that must be integrated with our UI state. <br />

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    </p>

                    <p><span className='text-lg font-semibold'>URL state</span> – Data that exists on our URLs, including the pathname and query parameters. <br />

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                <div className="collapse-title text-2xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                <div className="collapse-title text-2xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method, or a property.</p>
                    <li>They enable you to catch bugs early in the development process.
                    </li>
                    <li>Automated unit tests help a great deal with regression testing.</li>
                    <li>
                        They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</li>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                <div className="collapse-title text-2xl font-medium">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;