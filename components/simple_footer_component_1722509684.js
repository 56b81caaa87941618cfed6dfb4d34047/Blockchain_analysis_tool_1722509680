/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722509684", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-500 to-purple-700 backdrop-blur-lg bg-opacity-30 shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-20 md:p-12 lg:p-16 backdrop-filter backdrop-blur-md bg-white bg-opacity-10 rounded-3xl shadow-xl">
                <hr id="footer-divider" class="my-8 border-pink-300 sm:mx-auto opacity-30 lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter invert" alt="Landwind Logo" />
                            BlockScan - Blockchain Analytics Platform
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-pink-100 font-medium">
                        Stay ahead of the curve with BlockScan's cutting-edge blockchain analysis tools. Gain real-time insights, spot trends, and make data-driven decisions for your projects. Powered by decentralized technology.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
