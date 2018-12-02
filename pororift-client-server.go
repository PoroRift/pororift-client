package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Static("/", "./dist/pororift-client/")
	e.File("/", "./dist/pororift-client/index.html")

	e.Logger.Fatal(e.Start(":443"))
}
