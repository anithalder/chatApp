import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

export const Login = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="flex flex-col items-center justify-center max-w-[40rem] gap-4 p-6 bg-base-200 rounded-lg shadow-md"
            >

                {/* Username */}
                <label className="input validator" style={{ width: "300px", marginBottom: ".2rem", }}>
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        required
                        placeholder="Username"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength="3"
                        maxLength="30"
                        title="Only letters, numbers or dash"
                        style={{ width: "100%", }}
                    />
                </label>
                <p className="validator-hint hidden" style={{ marginBottom: "8px" }}>
                    Must be 3 to 30 characters
                    <br />
                    Containing only letters, numbers or dash
                </p>

                {/* Password */}
                <label className="input validator" style={{ width: "300px", marginBottom: ".2rem" }}>
                    <FaKey />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        style={{ width: "100%" }}
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number
                    <br />
                    At least one lowercase letter
                    <br />
                    At least one uppercase letter
                </p>
            </div>
        </div>
    );
}
