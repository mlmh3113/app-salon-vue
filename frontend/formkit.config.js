import { generateClasses } from "@formkit/themes"

const config = {
    config:{
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'bg-red-500 text-white text-center text-sm font-bold uppercase p-2 my-5', 
                label: 'block    font-bold text-lg text-white',
                input: 'w-full p-3 border rounded-lg text-gray-700 placeholder-gray-400',
            },
            submit: {
                input: '$reset bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mt-10'
            }

        })
    }
}

export default config