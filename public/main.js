import LeftContent from "./components/LeftContent.js";
import RightContent from "./components/RightContent.js";

export default {
  components: { LeftContent, RightContent },
  template: `
  <div class='columns main-columns'>
    <LeftContent />
    <main class="column is-8">
      <section class="section">
        <router-view></router-view>
      </section>
    </main>
    <RightContent />
  </div>
  `
}
