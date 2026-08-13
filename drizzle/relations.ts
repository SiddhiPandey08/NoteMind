import { relations } from "drizzle-orm/relations";
import { folders, files, workspaces } from "./schema";

export const filesRelations = relations(files, ({one}) => ({
	folder: one(folders, {
		fields: [files.folderId],
		references: [folders.id]
	}),
	workspace: one(workspaces, {
		fields: [files.workspaceId],
		references: [workspaces.id]
	}),
}));

export const foldersRelations = relations(folders, ({many}) => ({
	files: many(files),
}));

export const workspacesRelations = relations(workspaces, ({many}) => ({
	files: many(files),
}));