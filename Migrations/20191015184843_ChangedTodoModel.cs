using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class ChangedTodoModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoModel_UserProfileModel_UserProfileModelID",
                table: "TodoModel");

            migrationBuilder.RenameColumn(
                name: "UserProfileModelID",
                table: "TodoModel",
                newName: "UserProfileModelId");

            migrationBuilder.RenameIndex(
                name: "IX_TodoModel_UserProfileModelID",
                table: "TodoModel",
                newName: "IX_TodoModel_UserProfileModelId");

            migrationBuilder.AlterColumn<int>(
                name: "UserProfileModelId",
                table: "TodoModel",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_TodoModel_UserProfileModel_UserProfileModelId",
                table: "TodoModel",
                column: "UserProfileModelId",
                principalTable: "UserProfileModel",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoModel_UserProfileModel_UserProfileModelId",
                table: "TodoModel");

            migrationBuilder.RenameColumn(
                name: "UserProfileModelId",
                table: "TodoModel",
                newName: "UserProfileModelID");

            migrationBuilder.RenameIndex(
                name: "IX_TodoModel_UserProfileModelId",
                table: "TodoModel",
                newName: "IX_TodoModel_UserProfileModelID");

            migrationBuilder.AlterColumn<int>(
                name: "UserProfileModelID",
                table: "TodoModel",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_TodoModel_UserProfileModel_UserProfileModelID",
                table: "TodoModel",
                column: "UserProfileModelID",
                principalTable: "UserProfileModel",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
