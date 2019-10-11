using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "JournalModel",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ExcitedAboutToday = table.Column<string>(nullable: true),
                    OneWordToDescribeMeToday = table.Column<string>(nullable: true),
                    WhoNeedsMeOnMyAGame = table.Column<string>(nullable: true),
                    WhatMightStressMeOut = table.Column<string>(nullable: true),
                    TheWayMyBestSelfWouldDealIs = table.Column<string>(nullable: true),
                    SomeoneToSurpriseWithAppreciation = table.Column<string>(nullable: true),
                    OneActionToDemonstrateExcellence = table.Column<string>(nullable: true),
                    OneBoldActionToTakeToday = table.Column<string>(nullable: true),
                    LookingAtMyLifeMetaIWouldTellMyself = table.Column<string>(nullable: true),
                    ProjectsToKeepInMindForFutureAre = table.Column<string>(nullable: true),
                    IWouldKnowTodayIsASuccessIf = table.Column<string>(nullable: true),
                    TodaysTopPriorities = table.Column<string>(nullable: true),
                    TasksThatMustBeDoneToday = table.Column<string>(nullable: true),
                    PersonsToConnectWithToday = table.Column<string>(nullable: true),
                    UserID = table.Column<int>(nullable: false),
                    AccountCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JournalModel", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "LongTermGoalsModel",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    OneYearGoals = table.Column<string>(nullable: true),
                    ThreeYearGoals = table.Column<string>(nullable: true),
                    TenYearGoals = table.Column<string>(nullable: true),
                    LongTermGoals = table.Column<string>(nullable: true),
                    UserID = table.Column<int>(nullable: false),
                    AccountCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LongTermGoalsModel", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "UserProfileModel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    AccountCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfileModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TodoModel",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    UserProfileModelID = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: true),
                    AccountCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoModel", x => x.ID);
                    table.ForeignKey(
                        name: "FK_TodoModel_UserProfileModel_UserProfileModelID",
                        column: x => x.UserProfileModelID,
                        principalTable: "UserProfileModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TodoModel_UserProfileModelID",
                table: "TodoModel",
                column: "UserProfileModelID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JournalModel");

            migrationBuilder.DropTable(
                name: "LongTermGoalsModel");

            migrationBuilder.DropTable(
                name: "TodoModel");

            migrationBuilder.DropTable(
                name: "UserProfileModel");
        }
    }
}
