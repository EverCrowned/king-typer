import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiUrl } from "../../utils/constants";

import { Wrapper, InsideWrapper, ProfileName, FlagImage } from "./style";

export const ProfilePage = () => {
    const [userId, setUserId] = useState(localStorage.getItem("userid"));
    const [countryList, setCountryList] = useState(
        <option key={"default"}>Loading...</option>
    );
    const [countryValue, setCountryValue] = useState("AF");
    const [userData, setUserData] = useState({});
    const [countryFlagUrl, setCountryFlagUrl] = useState(
        "https://restcountries.eu/data/usa.svg"
    );

    useEffect(() => {
        updateCountryList();
        updateUserId();
        updateUserData();
        updateCountryFlagUrl();
    }, [userData?.data?.country]);

    const updateCountryList = async () => {
        setCountryList(await generateCountryOptions());
    };

    const updateUserData = async () => {
        setUserData(await getUserData(userId));
    };

    const updateUserId = async () => {
        setUserId(localStorage.getItem("userid"));
    };

    const updateCountryFlagUrl = async () => {
        setCountryFlagUrl(await getCountryUrlFlag());
    };

    const getCountryUrlFlag = async () => {
        const data = await (
            await fetch(
                `https://restcountries.eu/rest/v2/alpha/${userData?.data?.country}`,
                {
                    method: "GET"
                }
            )
        ).json();

        return data.flag;
    };

    const getUserData = async (id: string) => {
        const userData = await fetch(`${apiUrl}/users/userData/${id}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return await userData.json();
    };

    const generateCountryOptions = async () => {
        const data = await (
            await fetch("https://restcountries.eu/rest/v2", {
                method: "GET"
            })
        ).json();

        const generated = data.map((value, index) => {
            return (
                <option key={index + value.alpha2Code} value={value.alpha2Code}>
                    {value.name}
                </option>
            );
        });

        return generated;
    };

    const getUrlUserId = () => {
        return location.hash.split("/")[location.hash.split("/").length - 1];
    };

    const switchTheme = () => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        location.reload();
    };
    //  if no flag exists then use :flag_white:
    return (
        <Wrapper>
            <InsideWrapper>
                <ProfileName>
                    <FlagImage src={countryFlagUrl}></FlagImage>
                    {userData?.data?.name}
                </ProfileName>
                <button
                    onClick={async () => {
                        await fetch(`${apiUrl}/auth/logout`, {
                            method: "GET",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        location.replace("");
                    }}
                >
                    Logout
                </button>
                <button
                    onClick={() => {
                        switchTheme();
                    }}
                >
                    Switch Theme
                </button>
                <button
                    onClick={async () => {
                        await (
                            await fetch(`${apiUrl}/users/updateCountry`, {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({ country: countryValue })
                            })
                        ).text();
                        updateCountryFlagUrl();
                        updateUserData();
                    }}
                >
                    UpdateCountry to {countryValue}
                </button>
                <button
                    onClick={() => {
                        console.log(getUrlUserId());
                    }}
                >
                    Log user id from url
                </button>
                <select
                    name="countryCode"
                    onChange={e => {
                        setCountryValue(e.target.value);
                    }}
                >
                    {countryList}
                </select>
                <img />
            </InsideWrapper>
        </Wrapper>
    );
};
