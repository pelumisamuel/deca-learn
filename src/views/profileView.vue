<template>
  <div class="bg-gray-100">
    <!-- End of Navbar -->

    <div class="container mx-auto my-5 p-5">
      <router-link to="/addCourse">
        <Button content="Add New Course" class="w-1/6 mb-8" />
      </router-link>

      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="https://randomwordgenerator.com/img/picture-generator/52e6d3424a53aa14f1dc8460962e33791c3ad6e04e507440762e79d79348c1_640.jpg"
                alt=""
              />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {{ user.fullName }}
            </h1>
            <h3 class="text-gray-600 font-lg font-bold leading-6">
              {{ user.email }}
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  ></span
                >
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->
          <div class="bg-white p-3 hover:shadow">
            <div
              class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"
            >
              <span class="text-green-500">
                <svg
                  class="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Similar Authors</span>
            </div>
            <div class="grid grid-cols-3">
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
                <a href="#" class="text-main-color">Kojstantin</a>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  alt=""
                />
                <a href="#" class="text-main-color">James</a>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
                <a href="#" class="text-main-color">Natie</a>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                  alt=""
                />
                <a href="#" class="text-main-color">Casey</a>
              </div>
            </div>
          </div>
          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="grid grid-cols-1">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Your Courses</span>
                </div>
                <div
                  v-for="course in courses"
                  :key="course.id"
                  class="flex flex-col justify-between md:flex-row sm:items-start items-center mb-6 border-b-2 border-green-50"
                >
                  <div class="flex items-center">
                    <div class="text-center my-2">
                      <img
                        class="h-16 w-16 mx-auto"
                        src="https://random.imagecdn.app/150/150"
                        :alt="course.title"
                      />
                    </div>
                    <ul class="list-inside ml-5 space-y-2">
                      <li>
                        <div class="font-medium text-teal-600">
                          {{ course.title }}
                        </div>
                        <div class="text-gray-500 text-xs">
                          {{ course.description }}
                        </div>
                        <div class="font-semibold text-gray-500 text-xs">
                          ₦{{ course.price }}
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="flex">
                    <div class="mr-5">
                      <Button
                        @click="
                          editCourse(
                            course.id,
                            course.title,
                            course.description,
                            course.price
                          )
                        "
                        content="Edit"
                      />
                    </div>
                    <div>
                      <Button
                        @click="deleteCourse(course.id)"
                        class="bg-red-600"
                        content="Delete"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- About Section -->
          <!-- <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">Doe</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Female</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com"
                      >jane@example.com</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Show Full Information
            </button>
          </div> -->
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Button from '@/components/Button.vue'
export default {
  components: { Button },
  setup() {
    const user = ref('')
    const courses = ref([])
    const router = useRouter()

    const getUserDetails = async () => {
      //   const response = await axios.get('/courses')
      /// console.log()
      //const user = store.state.user
      try {
        const response = await axios.get(`/users/profile`)
        console.log(response.data.userCourses)
        user.value = response.data
        courses.value = response.data.userCourses
        // console.log(localStorage.getItem('token'))
      } catch (error) {
        console.log(error)
      }
    }
    const deleteCourse = async (id) => {
      if (confirm('Delete Course: Are you sure?')) {
        console.log('delete' + id)
        try {
          await axios.delete(`/courses/${id}`)
          alert('course deleted successfully.')
          getUserDetails()
        } catch (error) {
          console.log(error)
        }
      }
    }
    const editCourse = (id, title, description, price) => {
      localStorage.setItem(
        'editCourse',
        JSON.stringify({ title, description, price })
      )
      router.push(`/editCourse/${id}`)
    }
    // const createPage = () => {}
    //console.log(courses)

    return { getUserDetails, user, courses, deleteCourse, editCourse }
  },

  mounted() {
    this.getUserDetails()
  },
}
</script>
