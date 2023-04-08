import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, it } from 'vitest';
import Search from 'components/form/FormSearch.vue'
import FormSelect from 'components/form/FormSelect.vue'
import HomePage from 'pages/IndexPage.vue'

installQuasar();
describe('HomePage', () => {
  it('renders the search bar and form select', async () => {
    console.log('wrapper')
    const wrapper = mount(HomePage)

    // Assert that the search component exists
    expect(wrapper.findComponent(Search).exists()).toBe(true)

    // Assert that the form select component exists
    expect(wrapper.findComponent(FormSelect).exists()).toBe(true)

    await nextTick()
  })
})


