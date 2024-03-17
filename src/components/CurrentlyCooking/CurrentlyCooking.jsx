
const CurrentlyCooking = ({currentlyCooking}) => {

    const {recipe_id, recipe_name, preparing_time, calories} = currentlyCooking;

    return (
        <div>
            <div className="overflow-x-auto bg-slate-200 mt-5 mx-5 rounded-2xl">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentlyCooking;