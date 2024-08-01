/* Summary: The hero component contains the following two parts:
- To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
- To the right: There is an image relevant to the app.
*/
Vue.component("simple_hero_component_1722509684", {
    template: `
        <section id="hero-section" class="bg-gradient-to-br from-pink-500 to-purple-700 flex-1 min-h-screen relative overflow-hidden">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <div class="absolute inset-0 backdrop-blur-sm"></div>
            <div id="hero-container" class="relative grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 z-10">
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Unlock Blockchain Insights</h1>
                    </div>
                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">Powerful Analytics for Decentralized Data</p>
                    </div>
                    <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div id="hero-button-1-container" class="flex">
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white border border-white rounded-lg sm:w-auto hover:bg-white hover:bg-opacity-20 focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out backdrop-filter backdrop-blur-lg">Get Started</a>
                        </div>
                        <div id="hero-button-2-container" class="flex">
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-transparent border border-white rounded-lg sm:w-auto focus:outline-none hover:bg-white hover:bg-opacity-20 focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out backdrop-filter backdrop-blur-lg">Learn More</a>
                        </div>
                    </div>
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center z-10">
                    <img id="hero-image" src="./images/hero.png" alt="hero image" class="max-w-full h-auto rounded-lg shadow-2xl filter brightness-110 contrast-125">
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
