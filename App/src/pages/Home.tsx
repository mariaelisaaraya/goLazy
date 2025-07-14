import React, { useState } from "react";
import { Layout } from "@stellar/design-system";
import ConnectAccount from "../components/ConnectAccount";
import { useNavigate } from "react-router-dom";

const DASHBOARD_URL = "http://localhost:3000/dashboard";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "password" && typeof value === "string") {
      setPasswordStrength(checkPasswordStrength(value));
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (activeTab === "register" && formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    if (activeTab === "register") {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirma tu contraseña";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Las contraseñas no coinciden";
      }

      if (!formData.acceptTerms) {
        newErrors.acceptTerms = "Debes aceptar los términos y condiciones";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (activeTab === "login") {
        // Simular login exitoso y redirigir
        console.log("Login exitoso");
        window.location.href = DASHBOARD_URL;
      } else {
        // Simular registro exitoso y redirigir
        console.log("Registro exitoso");
        window.location.href = DASHBOARD_URL;
      }
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "#E88873";
    if (passwordStrength <= 3) return "#FAB49B";
    return "#B2D8D8";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Débil";
    if (passwordStrength <= 3) return "Media";
    return "Fuerte";
  };

  return (
    <Layout.Content>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #FDF8F0 0%, #A3B899 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {/* Mascot Image */}
          <div
            style={{
              flex: "0 0 300px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #B2D8D8 0%, #A3B899 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 40px rgba(163, 184, 153, 0.3)",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/lazy-mascot.png"
                alt="GoLazy Mascot"
                style={{
                  width: "240px",
                  height: "240px",
                  objectFit: "contain",
                  animation: "float 3s ease-in-out infinite",
                }}
              />
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                padding: "16px 24px",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#5D5C61",
                  margin: "0 0 8px 0",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                GoLazy
              </h2>
              <p
                style={{
                  color: "#5D5C61",
                  fontSize: "16px",
                  margin: "0",
                  opacity: "0.8",
                }}
              >
                ¡Lazy te está esperando para comenzar esta aventura!
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div style={{ flex: "1", maxWidth: "420px" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#5D5C61",
                  marginBottom: "12px",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                {activeTab === "login"
                  ? "¡Bienvenido de vuelta!"
                  : "¡Únete a GoLazy!"}
              </h1>
              <p
                style={{
                  color: "#5D5C61",
                  fontSize: "16px",
                  opacity: "0.8",
                }}
              >
                {activeTab === "login"
                  ? "Inicia sesión para continuar con tus metas"
                  : "Crea tu cuenta y comienza a lograr tus objetivos"}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "16px",
                  padding: "6px",
                  marginBottom: "28px",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <button
                  onClick={() => setActiveTab("login")}
                  style={{
                    flex: 1,
                    padding: "12px 20px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backgroundColor:
                      activeTab === "login" ? "white" : "transparent",
                    color: activeTab === "login" ? "#5D5C61" : "#888",
                    boxShadow:
                      activeTab === "login"
                        ? "0 4px 12px rgba(0,0,0,0.15)"
                        : "none",
                    transform:
                      activeTab === "login" ? "translateY(-1px)" : "none",
                  }}
                >
                  Iniciar sesión
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  style={{
                    flex: 1,
                    padding: "12px 20px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backgroundColor:
                      activeTab === "register" ? "white" : "transparent",
                    color: activeTab === "register" ? "#5D5C61" : "#888",
                    boxShadow:
                      activeTab === "register"
                        ? "0 4px 12px rgba(0,0,0,0.15)"
                        : "none",
                    transform:
                      activeTab === "register" ? "translateY(-1px)" : "none",
                  }}
                >
                  Registrarse
                </button>
              </div>

              <div
                style={{
                  marginBottom: "28px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#5D5C61",
                    margin: "0",
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, #5D5C61 0%, #A3B899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  🚀 Entra con tu wallet
                </p>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <ConnectAccount />
                  </div>

                  {/* Decorative elements */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "120%",
                      height: "120%",
                      background:
                        "radial-gradient(circle, rgba(163, 184, 153, 0.1) 0%, transparent 70%)",
                      borderRadius: "50%",
                      zIndex: 0,
                      animation: "pulse 2s infinite",
                    }}
                  ></div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "28px 0",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: "2px",
                    background:
                      "linear-gradient(to right, transparent, #e5e5e5, transparent)",
                  }}
                ></div>
                <span
                  style={{
                    padding: "0 20px",
                    fontSize: "14px",
                    color: "#888",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "20px",
                    fontWeight: "500",
                  }}
                >
                  o continúa con email
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "2px",
                    background:
                      "linear-gradient(to left, transparent, #e5e5e5, transparent)",
                  }}
                ></div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#5D5C61",
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontSize: "14px",
                    }}
                  >
                    Email
                  </label>
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#888",
                        fontSize: "18px",
                      }}
                    >
                      ✉️
                    </span>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "16px 16px 16px 50px",
                        border: errors.email
                          ? "2px solid #E88873"
                          : "2px solid #e5e5e5",
                        borderRadius: "12px",
                        fontSize: "16px",
                        outline: "none",
                        transition: "all 0.3s ease",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A3B899";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(163, 184, 153, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.email
                          ? "#E88873"
                          : "#e5e5e5";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  {errors.email && (
                    <p
                      style={{
                        color: "#E88873",
                        fontSize: "13px",
                        marginTop: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      ⚠️ {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#5D5C61",
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontSize: "14px",
                    }}
                  >
                    Contraseña
                  </label>
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#888",
                        fontSize: "18px",
                      }}
                    >
                      🔒
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "16px 50px 16px 50px",
                        border: errors.password
                          ? "2px solid #E88873"
                          : "2px solid #e5e5e5",
                        borderRadius: "12px",
                        fontSize: "16px",
                        outline: "none",
                        transition: "all 0.3s ease",
                        boxSizing: "border-box",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A3B899";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(163, 184, 153, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.password
                          ? "#E88873"
                          : "#e5e5e5";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "18px",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform =
                          "translateY(-50%) scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "translateY(-50%) scale(1)")
                      }
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>

                  {activeTab === "register" && formData.password && (
                    <div style={{ marginTop: "12px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "13px",
                          marginBottom: "6px",
                        }}
                      >
                        <span style={{ color: "#888" }}>
                          Fortaleza de contraseña:
                        </span>
                        <span
                          style={{
                            fontWeight: "600",
                            color: getPasswordStrengthColor(),
                          }}
                        >
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "6px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            backgroundColor: getPasswordStrengthColor(),
                            width: `${(passwordStrength / 5) * 100}%`,
                            transition: "width 0.3s ease",
                            borderRadius: "3px",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p
                      style={{
                        color: "#E88873",
                        fontSize: "13px",
                        marginTop: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      ⚠️ {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password (Register only) */}
                {activeTab === "register" && (
                  <div>
                    <label
                      style={{
                        display: "block",
                        color: "#5D5C61",
                        fontWeight: "600",
                        marginBottom: "8px",
                        fontSize: "14px",
                      }}
                    >
                      Confirmar contraseña
                    </label>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          left: "16px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#888",
                          fontSize: "18px",
                        }}
                      >
                        🔒
                      </span>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        style={{
                          width: "100%",
                          padding: "16px 50px 16px 50px",
                          border: errors.confirmPassword
                            ? "2px solid #E88873"
                            : "2px solid #e5e5e5",
                          borderRadius: "12px",
                          fontSize: "16px",
                          outline: "none",
                          transition: "all 0.3s ease",
                          boxSizing: "border-box",
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#A3B899";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(163, 184, 153, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.confirmPassword
                            ? "#E88873"
                            : "#e5e5e5";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{
                          position: "absolute",
                          right: "16px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "18px",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.transform =
                            "translateY(-50%) scale(1.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.transform =
                            "translateY(-50%) scale(1)")
                        }
                      >
                        {showConfirmPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                    {formData.confirmPassword &&
                      formData.password === formData.confirmPassword && (
                        <p
                          style={{
                            color: "#B2D8D8",
                            fontSize: "13px",
                            marginTop: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          ✅ Las contraseñas coinciden
                        </p>
                      )}
                    {errors.confirmPassword && (
                      <p
                        style={{
                          color: "#E88873",
                          fontSize: "13px",
                          marginTop: "6px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        ⚠️ {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {/* Terms checkbox (Register only) */}
                {activeTab === "register" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.acceptTerms}
                      onChange={(e) =>
                        handleInputChange("acceptTerms", e.target.checked)
                      }
                      style={{
                        marginTop: "4px",
                        transform: "scale(1.2)",
                        accentColor: "#A3B899",
                      }}
                    />
                    <label
                      htmlFor="terms"
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.6",
                        cursor: "pointer",
                      }}
                    >
                      Acepto los{" "}
                      <a
                        href="/terms"
                        style={{
                          color: "#FAB49B",
                          textDecoration: "underline",
                          fontWeight: "500",
                        }}
                      >
                        términos y condiciones
                      </a>{" "}
                      y la{" "}
                      <a
                        href="/privacy"
                        style={{
                          color: "#FAB49B",
                          textDecoration: "underline",
                          fontWeight: "500",
                        }}
                      >
                        política de privacidad
                      </a>
                    </label>
                  </div>
                )}

                {errors.acceptTerms && (
                  <p
                    style={{
                      color: "#E88873",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    ⚠️ {errors.acceptTerms}
                  </p>
                )}

                {/* Forgot password link (Login only) */}
                {activeTab === "login" && (
                  <div style={{ textAlign: "right" }}>
                    <a
                      href="/forgot-password"
                      style={{
                        fontSize: "14px",
                        color: "#FAB49B",
                        textDecoration: "underline",
                        fontWeight: "500",
                        transition: "color 0.2s ease",
                      }}
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    background:
                      "linear-gradient(135deg, #A3B899 0%, #8FA085 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(163, 184, 153, 0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(163, 184, 153, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(163, 184, 153, 0.3)";
                  }}
                >
                  {activeTab === "login" ? "Iniciar sesión" : "Crear cuenta"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-50%) scale(1.05);
            opacity: 0.2;
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </Layout.Content>
  );
};

export default Home;
