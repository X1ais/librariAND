const ENDPOINT_URL = 'https://6715773333bc2bfe40ba69f0.mockapi.io/api/chrissj-midterm/testimonials'

class TestimonialApi {
    get = async () => {
        try {
            const response = await fetch(ENDPOINT_URL)

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.error("Error fetching data:", error)
        }

    }

    post = async (event, testimonial) => {
        event.preventDefault()

        try {
            const response = await fetch(ENDPOINT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonial)
            })

            return await response.json()


        } catch (error) {
            console.error("Error posting data:", error)
        }

    }

    update = async (testimonial) => {
        try {
            const response = await fetch(`${ENDPOINT_URL}/${testimonial.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(testimonial)
            })
        } catch (error) {
            console.error("Error updating to API", error)
        }
    }

    delete = async (id) => {
        try {
            await fetch(`${ENDPOINT_URL}/${id}`, {
                method: 'DELETE'
            })
        } catch (error) {
            console.error("Error deleting data:", error)
        }
    }
}

export const testimonialApi = new TestimonialApi()