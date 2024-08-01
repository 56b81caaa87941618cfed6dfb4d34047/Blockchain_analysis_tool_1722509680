/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722509684", {
    template: `
    <section id="cta-component" class="relative bg-gradient-to-br from-pink-400 to-purple-600 flex-1 overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')] bg-cover bg-center opacity-50"></div>
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6 relative z-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-xl p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock the Power of Blockchain Analytics</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-gray-100 md:text-lg">Gain invaluable insights into emerging blockchain data and trends.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Analytics</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
