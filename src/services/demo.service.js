import sequelize from "../common/sequelize/connect.sequelize.js";

const demoService = {
    checkServer: async () => {
       

        const [results, metadata] = await sequelize.query("SELECT * FROM food"); // Raw query - use array destructuring

        console.log(results)

        return results
    },
}

export default demoService